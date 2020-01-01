
import { connect } from 'react-redux';
import DisplayCompleted from './DisplayCompleted';

const mapStateToProps = state => {
    return {
        items: state.reducer
    }
}
export default connect(mapStateToProps)(DisplayCompleted);