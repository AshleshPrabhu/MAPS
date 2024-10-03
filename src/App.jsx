
import 'leaflet/dist/leaflet.css';
import LeafletMap from './LeafletMap';


function App() {
  

  return (
    <div className='bg-black h-screen'>
      <div className=''>
        <p className='text-white text-center text-3xl'>Maps showing the institutes associated with yuvavaani :  </p>
      </div>
      <div className='h-full'>
        <LeafletMap/>
      </div>
    </div>
  )
}

export default App
