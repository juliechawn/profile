import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
      historyNames: store.city.history 
    };
  }
  
export default connect(mapStoreToProps)(SearchHistory);