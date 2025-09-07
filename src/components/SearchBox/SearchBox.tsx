import React, { useState, useRef, useEffect } from 'react';
import { ZodiacSign } from '../../types';
import { searchZodiacSigns } from '../../utils/zodiacUtils';
import { debounce } from '../../utils/helpers.ts';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
  onSignSelect: (sign: ZodiacSign) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSignSelect,
  placeholder = 'Tìm kiếm cung hoàng đạo...',
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchZodiacSigns>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const debouncedSearch = debounce((searchQuery: string) => {
    const searchResults = searchZodiacSigns(searchQuery);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }, 300);

  useEffect(() => {
    if (query.trim()) {
      debouncedSearch(query);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFocusedIndex(-1);
  };

  const handleSelectSign = (sign: ZodiacSign) => {
    onSignSelect(sign);
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setFocusedIndex(-1);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < results.length) {
          handleSelectSign(results[focusedIndex].id);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleInputFocus = () => {
    if (results.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay to allow click on results
    setTimeout(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, 200);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={styles.input}
          aria-label="Tìm kiếm cung hoàng đạo"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          role="combobox"
        />
        <div className={styles.searchIcon}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <ul
          ref={listRef}
          className={styles.results}
          role="listbox"
          aria-label="Kết quả tìm kiếm cung hoàng đạo"
        >
          {results.map((result, index) => (
            <li
              key={result.id}
              className={`${styles.resultItem} ${
                index === focusedIndex ? styles.focused : ''
              }`}
              onClick={() => handleSelectSign(result.id)}
              role="option"
              aria-selected={index === focusedIndex}
            >
              <div className={styles.resultContent}>
                <div className={styles.resultName}>
                  {result.name}
                </div>
                <div className={styles.resultDetails}>
                  {result.englishName} • {result.dateRange}
                </div>
              </div>
              <div className={styles.resultSymbol}>
                {result.symbol}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
