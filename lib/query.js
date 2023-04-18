export const COURSE_QUERY = `
  query {
  courses {
    data {
      attributes {
        title,
        price,
        author,
        description,
        slug
        avatar {
          data {
            attributes {
              width,
              url
            }
          }
        }
        image {
          data {
            attributes {
              width
              url
            }
          }
        }
      }
    }
  }
}
`;