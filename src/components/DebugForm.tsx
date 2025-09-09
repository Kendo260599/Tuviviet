import React, { useState } from 'react';

// Simple debug component để test vấn đề form submit
const DebugForm: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    addLog('Form submit event triggered');
    e.preventDefault();
    addLog('preventDefault() called');
    
    try {
      // Test calculateBirthChart import
      import('../utils/birthChartUtils').then((module) => {
        addLog('calculateBirthChart imported successfully');
        
        // Test function call
        const result = module.calculateBirthChart(1990, 5, 15, 14, 30);
        addLog(`calculateBirthChart executed successfully`);
        addLog(`Result keys: ${Object.keys(result).join(', ')}`);
        
        // Check if result has expected structure
        if (result.year && result.year.can) {
          addLog('✅ Result has correct structure (year.can exists)');
        } else {
          addLog('❌ Result structure is incorrect');
          addLog(`Result.year: ${JSON.stringify(result.year)}`);
        }
        
      }).catch((error) => {
        addLog(`IMPORT ERROR: ${error instanceof Error ? error.message : String(error)}`);
      });
      
    } catch (error) {
      addLog(`SYNC ERROR: ${error instanceof Error ? error.message : String(error)}`);
      console.error('Debug form error:', error);
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      width: '400px', 
      background: 'white', 
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      zIndex: 9999,
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <h3>🐛 Debug Panel</h3>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
        <button type="submit" style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          marginRight: '8px'
        }}>
          Test Form Submit
        </button>
        <button type="button" onClick={clearLogs} style={{
          background: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px'
        }}>
          Clear Logs
        </button>
      </form>

      <div style={{ 
        background: '#f8f9fa', 
        padding: '8px', 
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '12px',
        maxHeight: '300px',
        overflow: 'auto'
      }}>
        {logs.length === 0 ? (
          <div style={{ color: '#666' }}>No logs yet...</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} style={{ 
              marginBottom: '4px',
              color: log.includes('ERROR') ? 'red' : 'black'
            }}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DebugForm;
