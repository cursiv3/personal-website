import React from 'react';
import BarGraph from "./d3/BarGraph";
import './skills.css';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png',
    'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
    'https://i2.wp.com/www.worldeatingdisordersday.org/wp-content/uploads/2016/03/css-logo.png',
    'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png',
    'http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png',
    'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png',
    'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
    'http://logonoid.com/images/postgresql-logo.png',
    'https://res.cloudinary.com/duo41k2sh/image/upload/v1454254508/git-logo_bv0ydu.jpg',
    'https://www.worksonarm.com/wp-content/uploads/2017/08/MongoDB-logo.png',
    'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj',
    'https://www.dataapplab.com/wp-content/uploads/2016/10/python.png'
]

const Skills = () => (
    <div className="skillsContainer">
        <h1 className="skillsHeader">Skills</h1>
        <BarGraph />
    </div>
);

export default Skills;