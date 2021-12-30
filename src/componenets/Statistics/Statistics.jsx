import PropTypes from 'prop-types';
import { Wrapper, Title, StatList, StatListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatListItem>
          );
        })}
      </StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
