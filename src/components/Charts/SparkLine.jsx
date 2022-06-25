import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

class SparkLine extends React.PureComponent {
  render() {
    const { height, width, type } = this.props;

    return (
      <Sparklines height={height} width={width} data={[5, 10, 5, 20, 8, 15]}>
        {type === 'lines'
          ? (<SparklinesLine color="blue" style={{ fill: 'blue', fillOpacity: '0.1' }} />)
          : <SparklinesBars style={{ fill: '#ffffff' }} />}
      </Sparklines>
    );
  }
}

export default SparkLine;
