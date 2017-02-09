import React, {PropTypes} from 'react';
import Source from '../components/Source';
import {Link} from 'react-router';
//import js from '!!raw!./SlothsOverview.jsx';

import {ApiSync} from '../api/Api';
import SlothsList from './SlothsList';

function SlothsOverview(props) {
    const {
        sloths_list,
        fetch,
        error
    } = props;

    return <div>
        <h1>Custom loaders and errors with sloths</h1>
        <h5>Under development</h5>
        <p>This example shows how to provide your own loader and error components, building upon the basic structure of the <Link to="/dogs">dogs example</Link>.</p>
        <p>All actions are artificially slowed down so you can see them.</p>
        <p><Source exampleDir="sloths">Source</Source></p>
        <SlothsList
            sloths_list={sloths_list.toJS()}
            receivedWhen={props => !!props.sloths_list}
            fetch={fetch}
            error={error}
        />
    </div>;
}

SlothsOverview.propTypes = {
    sloths_list: PropTypes.object,
    fetch: PropTypes.bool,
    error: PropTypes.object
};

const withSync = ApiSync.sloths.list();
export default withSync(SlothsOverview);