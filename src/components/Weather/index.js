import { connect } from 'react-redux';
import Weather from './Weather';

function mapStoreToProps(store) {
    return {
      backgroundImg: store.city.backgroundImg    
    };
  }
  
export default connect(mapStoreToProps)(Weather);