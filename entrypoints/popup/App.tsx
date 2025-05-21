import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const openInWindow = () => {
    browser.windows.create({
      url: browser.runtime.getURL("/popup.html"),
      type: "popup",
      width: 800,
      height: 600
    });
  };
  
  const openInSidePanel = () => {
    // This would typically integrate with browser's side panel API
    // Implementation depends on browser support
    if (browser.sidePanel) {
      browser.sidePanel.open();
    } else {
      alert('Side panel not supported in this browser');
    }
  };
  
  const openInNewTab = () => {
    browser.tabs.create({
      url: browser.runtime.getURL("/popup.html")
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="left-controls">
          <button className="nav-button" onClick={openInNewTab} title="Open in new tab">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M21 11V3H13v8H3v10h18V11h-8v-6h6v6z"/>
            </svg>
          </button>
        </div>
        
        <h1 className="app-title">Shitposter</h1>
        
        <div className="right-controls">
          <button className="nav-button" onClick={openInWindow} title="Open in popup window">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H5V8h14v10z"/>
            </svg>
          </button>
          <button className="nav-button" onClick={openInSidePanel} title="Open in side panel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h8v2H7V7zm0 4h8v2H7v-2zm0 4h8v2H7v-2z"/>
            </svg>
          </button>
        </div>
      </header>
      
      <nav className="app-nav">
        <button 
          className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button 
          className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>
      
      <main className="content-area">
        {activeTab === 'home' && (
          <div className="home-content">
            <h2>Welcome to Shitposter</h2>
            <p className="intro-text">The ultra-modern extension for creating and scheduling social media content.</p>
            
            <div className="stats-container">
              <div className="stat-card">
                <h3>Posts</h3>
                <p className="stat-number">12</p>
              </div>
              <div className="stat-card">
                <h3>Scheduled</h3>
                <p className="stat-number">5</p>
              </div>
              <div className="stat-card">
                <h3>Completed</h3>
                <p className="stat-number">43</p>
              </div>
            </div>
            
            <button className="action-button">Create New Post</button>
          </div>
        )}
        
        {activeTab === 'posts' && (
          <div className="posts-content">
            <h2>Your Posts</h2>
            <div className="post-list">
              <div className="post-item">
                <h3>Summer Travel Guide</h3>
                <p>Scheduled for tomorrow at 3:00 PM</p>
                <div className="post-actions">
                  <button className="small-button">Edit</button>
                  <button className="small-button">Delete</button>
                </div>
              </div>
              <div className="post-item">
                <h3>Product Launch Announcement</h3>
                <p>Scheduled for June 15 at 10:00 AM</p>
                <div className="post-actions">
                  <button className="small-button">Edit</button>
                  <button className="small-button">Delete</button>
                </div>
              </div>
              <div className="post-item">
                <h3>Weekly Tech Roundup</h3>
                <p>Draft - Not scheduled</p>
                <div className="post-actions">
                  <button className="small-button">Edit</button>
                  <button className="small-button">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="settings-content">
            <h2>Settings</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Default Platform</label>
                <select>
                  <option>Twitter</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Post Format</label>
                <select>
                  <option>Standard</option>
                  <option>Thread</option>
                  <option>Image + Text</option>
                </select>
              </div>
              
              <div className="form-group checkbox-group">
                <input type="checkbox" id="dark-mode" />
                <label htmlFor="dark-mode">Dark Mode</label>
              </div>
              
              <div className="form-group checkbox-group">
                <input type="checkbox" id="notifications" checked />
                <label htmlFor="notifications">Enable Notifications</label>
              </div>
              
              <button type="button" className="action-button">Save Settings</button>
            </form>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Shitposter v1.0.0</p>
      </footer>
    </div>
  );
}

export default App;
