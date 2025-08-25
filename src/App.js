import {Routes, Route} from 'react-router-dom'

import SharedLayout from './components/SharedLayout';
import { Home, Destination, Crew, Technology} from './containers'
 

function App() {
   
   
   return (
     <Routes>
       <Route path='/' element={<SharedLayout />}>
         <Route index element={<Home />} />
         <Route path='destination' element={<Destination />} />
         <Route path='crew' element={<Crew />} />
         <Route path='technology' element={<Technology />} />
       </Route>
     </Routes>
   )
}

export default App;
