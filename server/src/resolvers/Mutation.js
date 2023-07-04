const Mutation = {
  createBook: async (_, { input }, { Books }) => {
    try {
      const newBook = {...input}

      await Books.create(newBook)

      return newBook
    } catch (err) {
      throw new Error(`Error to create new book: ${err}`)      
    }
  },
  deleteBook: async (_, { id }, { Books }) => {
    try {
      await Books.destroy({ where: { id } })
      return 'Delete made successfully'
    } catch (err) {
      throw new Error(`Error to delete book: ${err}`)      
    }
  },
  updateBook: async (_, { id, input }, { Books }) => {
    try {
      const newInfos = {...input}

      await Books.update(newInfos, { where: { id } })

      return newInfos
    } catch (err) {
      throw new Error(`Error to update book: ${err}`)      
    }
  },
}

export default Mutation