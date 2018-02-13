import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  LabelList,
  ResponsiveContainer
} from "recharts";
import "../skills.css";

const data = [
  {
    name: "JavaScript",
    level: 13,
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
  },
  {
    name: "HTML",
    level: 12,
    url: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
  },
  {
    name: "CSS",
    level: 12,
    url:
      "https://i2.wp.com/www.worldeatingdisordersday.org/wp-content/uploads/2016/03/css-logo.png"
  },
  {
    name: "React",
    level: 11,
    url:
      "https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png"
  },
  {
    name: "Redux",
    level: 11,
    url: "https://s3-us-west-2.amazonaws.com/cslwebsite/reduxLightened.png"
  },
  {
    name: "Express",
    level: 8,
    url:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png"
  },
  {
    name: "Node",
    level: 8,
    url: "https://www.brainvire.com/wp-content/uploads/2017/12/nodejs.png"
  },
  {
    name: "PostgreSQL",
    level: 9,
    url:
      "https://cdn.iconscout.com/public/images/icon/free/png-512/postgresql-logo-3116369c4fbec49e-512x512.png"
  },
  {
    name: "Git",
    level: 12,
    url:
      "http://hamwaves.com/cli/images/git.svg"
  },
  {
    name: "MongoDB",
    level: 8,
    url:
      "https://static1.squarespace.com/static/513914cde4b0f86e34bbb954/t/58d2c758725e25221a20ed53/1490208601230/mongodb-logo.png"
  },
  {
    name: "AWS",
    level: 8,
    url:
      "https://s3-us-west-2.amazonaws.com/cslwebsite/awsLighten.png"
  },
  {
    name: "Python",
    level: 13,
    url: "https://www.python.org/static/opengraph-icon-200x200.png"
  }
];

class LogoDisplay extends React.Component {
  render() {
    const { x, y, value, width, height } = this.props;
    return (
      <image
        style={{
          width: height + "px",
          height: height + "px",
        }}
        fill="white"
        href={value}
        x={x + width}
        y={y}
      />
    );
  }
}

class BarGraph extends React.Component {
  render() {
    return (
      <div className="barChartWrap">
        <ResponsiveContainer width={"100%"} height={550}>
          <BarChart
            data={data}
            margin={{ top: 5, bottom: -20 }}
            layout="vertical"
          >
            <YAxis type="category" dataKey="name" width={1} />
            <XAxis
              type="number"
              domain={[0, 20]}
              ticks={[""]}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="level" fill="red" animationDuration={1700}>
              <LabelList
                dataKey="url"
                content={<LogoDisplay />}
                position="insideTopRight"
              />
              <LabelList dataKey="name" fill="white" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="axisLabelLeft">Beginner</p>
        <p className="axisLabelRight">Expert</p>
      </div>
    );
  }
}

export default BarGraph;
