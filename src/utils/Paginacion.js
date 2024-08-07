//(Aclarar todo en casa porque soy capaz de olvidarme algo ajsjsjsjss)
import "dotenv/config";

const BASE_URL = process.env.BASE_URL;

export class PaginationDto { //clasepag
  limit;//limite de elementos por pag
  offset;//indice de la pag actual
  nextPage;//proxima pag
  total; //el total de los elementos disponibles
}

export class Pagination { //Comienza paginación
  limitRegex = /limit=\d+/;
  offsetRegex = /offset=\d+/;

  parseLimit(limit) {
    return !isNaN(parseInt(limit)) ? parseInt(limit) : 1;
  }

  parseOffset(offset) {
    return !isNaN(parseInt(offset)) ? parseInt(offset) : 0;
  }

  buildPaginationDto(limit, currentOffset, total, path) {
    const response = new PaginationDto();
    response.limit = limit;
    response.offset = currentOffset;
    response.total = total;
    if (limit !== -1) {
      response.nextPage =
        limit + currentOffset*limit < total
          ? this.buildNextPage(path, limit, currentOffset)
          : null;
    }

    return response;
  }

  buildNextPage(path, limit, currentOffset) { //Proceda
    let url = BASE_URL + path;
    if (this.limitRegex.test(url)) {
      url = url.replace(this.limitRegex, `limit=${limit}`);
    } else {
      url = `${url}${url.includes("?") ? "&" : "?"}limit=${limit}`;
    }

    if (this.offsetRegex.test(url)) {
      url = url.replace(this.offsetRegex, `offset=${currentOffset + 1}`);
    } else {
      url = `${url}${url.includes("?") ? "&" : "?"}offset=${
        currentOffset + 1
      }`;
    }

    return url;
  }
}