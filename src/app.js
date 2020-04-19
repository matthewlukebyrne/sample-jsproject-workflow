// Import Header
import Header from './ponents/Header';
import User from './ponents/User';

// Imported Sass file
import './scss/app.scss';

const app = async () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('user').innerHTML = await User();
} 

// Init app
app();