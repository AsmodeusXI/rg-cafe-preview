import React from 'react';
import './OrgTags.css';

function OrgTags({ tags }) {
    return <section>
        {tags.map((tag) => <span className='tag'>{tag}</span>)}
    </section>;
}

export default OrgTags;