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
    url: "http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"
  },
  {
    name: "Express",
    level: 8,
    url:
      "https://camo.githubusercontent.com/647e291a5fd52d50e01deb82f9392c462df148a6/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67"
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
      "https://i.pinimg.com/originals/01/1d/b5/011db55ecc6a52a484a4f9be63158259.png"
  },
  {
    name: "Git",
    level: 12,
    url:
      "https://res.cloudinary.com/duo41k2sh/image/upload/v1454254508/git-logo_bv0ydu.jpg"
  },
  {
    name: "MongoDB",
    level: 8,
    url:
      "https://www.worksonarm.com/wp-content/uploads/2017/08/MongoDB-logo.png"
  },
  {
    name: "AWS",
    level: 8,
    url:
      "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj"
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
          height: height + "px"
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
