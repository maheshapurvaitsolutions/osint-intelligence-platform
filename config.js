// OSINT Terminal Configuration
// Customize API endpoints, settings, and behavior

const OSINT_CONFIG = {
    // API Configuration
    apis: {
        // Free tier APIs (no key required)
        ipApi: {
            url: 'http://ip-api.com/json/',
            rateLimitPerMinute: 45,
            enabled: true
        },
        
        razorpayIFSC: {
            url: 'https://ifsc.razorpay.com/',
            rateLimitPerMinute: 60,
            enabled: true
        },
        
        googleDNS: {
            url: 'https://dns.google/resolve',
            rateLimitPerMinute: 100,
            enabled: true
        },
        
        // CORS Proxy
        corsProxy: {
            url: 'https://api.allorigins.win/get?url=',
            rateLimitPerMinute: 200,
            enabled: true
        },
        
        // Premium APIs (require API keys)
        numVerify: {
            url: 'http://apilayer.net/api/validate',
            apiKey: 'YOUR_NUMVERIFY_API_KEY', // Replace with actual key
            rateLimitPerMonth: 1000,
            enabled: false // Set to true when you have a key
        },
        
        ipStack: {
            url: 'http://api.ipstack.com/',
            apiKey: 'YOUR_IPSTACK_API_KEY', // Replace with actual key
            rateLimitPerMonth: 10000,
            enabled: false
        }
    },
    
    // Feature Flags
    features: {
        phoneAnalysis: true,
        ipGeolocation: true,
        emailIntelligence: true,
        vehicleLookup: true,
        usernameScanning: true,
        bankIntelligence: true,
        
        // Advanced features
        socialMediaScanning: true,
        patternAnalysis: true,
        securityScoring: true,
        riskAssessment: true,
        
        // UI Features
        darkMode: true,
        animations: true,
        matrixBackground: true,
        soundEffects: false,
        
        // Debug features
        performanceLogging: true,
        errorReporting: true,
        developerMode: false
    },
    
    // UI Customization
    ui: {
        theme: 'cyber', // 'cyber', 'dark', 'light'
        primaryColor: '#00ff41',
        secondaryColor: '#00d4ff',
        accentColor: '#ff0080',
        
        // Animations
        loadingDuration: 2000,
        transitionSpeed: 300,
        
        // Text
        siteName: 'OSINT Terminal',
        tagline: 'Advanced Intelligence Platform',
        version: '2.0'
    },
    
    // Security Settings
    security: {
        rateLimiting: true,
        inputValidation: true,
        xssProtection: true,
        corsPolicy: 'strict',
        
        // Privacy
        dataRetention: false,
        analyticsTracking: false,
        cookieUsage: false,
        localStorageUsage: false
    },
    
    // Performance Settings
    performance: {
        cacheEnabled: true,
        requestTimeout: 10000, // 10 seconds
        retryAttempts: 3,
        batchRequests: false,
        
        // Optimization
        lazyLoading: true,
        imageOptimization: true,
        codeMinification: true
    },
    
    // Platform-specific settings
    platforms: {
        // Social media platforms for username scanning
        socialMedia: [
            { name: 'GitHub', url: 'https://github.com/', priority: 1 },
            { name: 'Twitter', url: 'https://twitter.com/', priority: 1 },
            { name: 'Instagram', url: 'https://instagram.com/', priority: 1 },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/', priority: 1 },
            { name: 'Reddit', url: 'https://reddit.com/user/', priority: 2 },
            { name: 'Medium', url: 'https://medium.com/@', priority: 2 },
            { name: 'Pinterest', url: 'https://pinterest.com/', priority: 3 },
            { name: 'Behance', url: 'https://behance.net/', priority: 3 },
            { name: 'Dribbble', url: 'https://dribbble.com/', priority: 3 },
            { name: 'DeviantArt', url: 'https://deviantart.com/', priority: 3 },
            { name: 'Steam', url: 'https://steamcommunity.com/id/', priority: 2 },
            { name: 'Twitch', url: 'https://twitch.tv/', priority: 2 },
            { name: 'YouTube', url: 'https://youtube.com/@', priority: 1 },
            { name: 'TikTok', url: 'https://tiktok.com/@', priority: 2 },
            { name: 'Spotify', url: 'https://open.spotify.com/user/', priority: 3 },
            { name: 'SoundCloud', url: 'https://soundcloud.com/', priority: 3 }
        ],
        
        // Email providers for analysis
        emailProviders: {
            'gmail.com': { security: 'high', popularity: 'very high', business: false },
            'outlook.com': { security: 'high', popularity: 'high', business: false },
            'yahoo.com': { security: 'medium', popularity: 'medium', business: false },
            'hotmail.com': { security: 'medium', popularity: 'medium', business: false },
            'protonmail.com': { security: 'very high', popularity: 'low', business: false },
            'icloud.com': { security: 'high', popularity: 'medium', business: false }
        }
    },
    
    // Regional Settings
    regional: {
        defaultCountry: 'IN', // India
        supportedCountries: ['IN', 'US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP'],
        timezone: 'Asia/Kolkata',
        dateFormat: 'DD/MM/YYYY',
        numberFormat: 'international'
    },
    
    // Legal and Compliance
    legal: {
        termsOfService: 'For educational and legitimate research purposes only',
        privacyPolicy: 'No data collection or storage',
        disclaimer: 'Users responsible for legal compliance',
        jurisdiction: 'International',
        
        // Data protection
        gdprCompliant: true,
        ccpaCompliant: true,
        coppaCompliant: true
    },
    
    // Analytics (if enabled)
    analytics: {
        enabled: false,
        provider: 'none', // 'google', 'matomo', 'none'
        trackingId: '',
        anonymousTracking: true,
        cookieConsent: true
    },
    
    // Development Settings
    development: {
        debugMode: false,
        testMode: false,
        mockData: false,
        verbose: false,
        
        // API testing
        useTestEndpoints: false,
        simulateLatency: false,
        errorSimulation: false
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OSINT_CONFIG;
}

// Make available globally
window.OSINT_CONFIG = OSINT_CONFIG;

// Configuration validation
function validateConfig() {
    const errors = [];
    
    // Check required APIs
    if (!OSINT_CONFIG.apis.ipApi.enabled && !OSINT_CONFIG.apis.ipStack.enabled) {
        errors.push('At least one IP geolocation API must be enabled');
    }
    
    // Check API keys for premium services
    if (OSINT_CONFIG.apis.numVerify.enabled && OSINT_CONFIG.apis.numVerify.apiKey === 'YOUR_NUMVERIFY_API_KEY') {
        errors.push('NumVerify API key not configured');
    }
    
    // Check CORS proxy
    if (!OSINT_CONFIG.apis.corsProxy.enabled) {
        console.warn('CORS proxy disabled - some features may not work');
    }
    
    if (errors.length > 0) {
        console.error('Configuration errors:', errors);
        return false;
    }
    
    console.log('✅ Configuration validated successfully');
    return true;
}

// Initialize configuration
document.addEventListener('DOMContentLoaded', function() {
    if (OSINT_CONFIG.development.debugMode) {
        console.log('🔧 OSINT Terminal Configuration:', OSINT_CONFIG);
    }
    
    validateConfig();
    
    // Apply theme
    if (OSINT_CONFIG.ui.theme === 'cyber') {
        document.documentElement.style.setProperty('--accent-primary', OSINT_CONFIG.ui.primaryColor);
        document.documentElement.style.setProperty('--accent-secondary', OSINT_CONFIG.ui.secondaryColor);
        document.documentElement.style.setProperty('--accent-tertiary', OSINT_CONFIG.ui.accentColor);
    }
});

console.log('⚙️ OSINT Terminal configuration loaded');

