
import 'leaflet/dist/leaflet.css';
import LeafletMap from './LeafletMap';


function App() {
  

  return (
    <div className='bg-black'>
      <div className=''>
        <p className='text-white text-center text-3xl'>Maps showing the institutes associated with yuvavaani :  </p>
      </div>
      <LeafletMap/>
    </div>
  )
}

export default App
