import Header from '../../../app_components/nav/Header'
import SideNav from '../../../app_components/sideNav/SideNav'
import ForumPanel from '../components/ForumPanel'

const Dashboard = () => {
  return (
    <>
        <Header />
        <div className='grid md:grid-cols-[0.3fr_1fr] sm:grid-cols-1 py-5'>
            <SideNav />
            <ForumPanel />
        </div>
    </>
  )
}

export default Dashboard