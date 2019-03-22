import { connect } from 'react-redux';
import Background from './Background';

function mapStoreToProps(store) {
    return {
      backgroundImg: store.city.backgroundImg    
    };
  }
  
export default connect(mapStoreToProps)(Background);