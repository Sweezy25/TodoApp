
import { connect } from 'react-redux';
import Display from './Display';
import { deletetodo } from '../../actions';

const mapStateToProps = state => {
    return {
        items: state.reducer
    }
}
const mapDispatchToProps = dispatch => ({
    itemdelete: id => dispatch(deletetodo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Display);