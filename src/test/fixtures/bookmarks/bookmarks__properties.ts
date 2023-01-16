import { Bookmark } from '../../../ts/types';
import { BLACK_GIRLS_CODE } from './bookmarks';

export const BOOKMARK_WITH_DATE_ADDED: Bookmark = {
  ...BLACK_GIRLS_CODE,
  properties: {
    ADD_DATE: '1612002291',
  },
};

export const BOOKMARK_WITH_MULTIPLE_PROPERTIES: Bookmark = {
  ...BOOKMARK_WITH_DATE_ADDED,
  properties: {
    ...BOOKMARK_WITH_DATE_ADDED.properties,
    ICON: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB20lEQVQ4jX2STWsTURSG33PuzORjTPNRPwk0mBbduBC0rQ0utIKKi0LVkoVCFfwxoqj/QuwfcBF0VWLqqgh1kXSSUrWQhdRSUsnMnXuvi0nDRKJnde7hvdz3PO8lHBcRMXPUa62HQyLSWhtjMLYINJSOFQgAzGyMuXHr9utXL0647uLizU5724Acx7k6O19defB1ayuQMrpgASBiQGeyueXl+45lHfX7d+7ec1MJsPiyufn4ydO5K5erj1aZhdZKACCCMaZYLIbS/9Ro9Pt+EPjbrabntT3P63a7e3s/Pm9sBFL+y+f/SsRXnJ1fqK48dBynVJra3f02c+Hi9cpCs9USQgwpxZ4Q9odabafdOnn6rJJ+qDQzsRDZieybl8/f1z4KIZRSA/DMBCXX1+vT5XKjXmeyM+nU2ts1GahCvpCw7Rj3eMfEtqWkFJYFbRRpAdbhSGoivlCFSkoFBXLPhSmtzTVd9HU4ifR55HvwA2iKchBgBf0Mc0u6vIPDS+YUCB1zMI3JQ/zOIU0Il/BuYD5mic7AbeJnEnbfSBc2w/QQhNA9yDySkWYkiAqmvuMXQUzA7uJoBoU29jNI5JDsYP8A/oiaRiH8dRxDCQCDDEz0YQ3AgD5WGAxI/QE3YLsLjXdTWwAAAABJRU5ErkJggg==',
  },
};

export const BOOKMARK_WITH_EMPTY_PROPERTIES: Bookmark = {
  ...BLACK_GIRLS_CODE,
  properties: {},
};

export const BOOKMARK_WITHOUT_PROPERTIES: Bookmark = (() => {
  const BOOKMARK = BLACK_GIRLS_CODE;
  delete BOOKMARK.properties;
  return BOOKMARK;
})();

export const BOOKMARK_WITH_CUSTOM_PROPERTIES: Bookmark = {
  ...BLACK_GIRLS_CODE,
  properties: {
    foo: 'bar',
  },
};
