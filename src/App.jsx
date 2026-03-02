import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import SideBar from './component/SideBar'
import CreatePost from './component/CreatePost'
import Post from './component/Post'
import PostList from './component/PostList'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (

    <div className='app-container'>
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className='content'>
        <Header />
        {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>

  )
}

export default App
