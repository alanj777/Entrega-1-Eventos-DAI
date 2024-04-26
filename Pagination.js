export const paginateResults = (page, limit, totalResults, data) => {
    const totalPages = Math.ceil(totalResults / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const offset = (page - 1) * limit;
    const results = data.slice(offset, offset + limit);
  
    return {
      pagination: {
        limit,
        offset,
        nextPage,
        total: totalResults,
      },
      collection: results,
    };
  };