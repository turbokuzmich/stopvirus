import json2mq from 'json2mq';

export default function mediaQuery(query) {
  return '@media ' + json2mq(query);
}
