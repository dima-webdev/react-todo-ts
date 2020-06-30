import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Стрница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum dignissimos laudantium magnam quaerat quo recusandae rem sint unde.</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    );
}