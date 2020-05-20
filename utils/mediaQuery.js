import json2mq from 'json2mq';

export default function (query) {
  return '@media ' + json2mq(query);
}
