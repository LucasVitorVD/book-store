const Query = {
  books: async (_, { filter }, { Books }) => {
    if (filter) {
      try {
        const books = await Books.findAll({
          where: filter
        })
    
        return books
      } catch (error) {
        console.error("Erro ao buscar livros por categoria:", error)
        throw error
      }
    }

    try {
      const books = await Books.findAll({ raw: true })

      return books
    } catch (err) {
      throw new Error(`Error to return all books: ${err}`)
    }
  },
  book: async (_, args, { Books }) => {
    try {
      const foundBook = await Books.findOne({ raw: true, where: { id: args.id } })

      return foundBook
    } catch (err) {
      throw new Error(`Error to return book: ${err}`)
    }
  }
}

export default Query