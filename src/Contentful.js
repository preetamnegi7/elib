import { createClient } from "contentful";
export default createClient({
  space: process.env.REACT_APP_API_PRITAM,
  accessToken: process.env.REACT_APP_TOK_PRITAM
});
