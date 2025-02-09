const reviewSchema = {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        description: 'The name of the customer who submitted the review.',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'The rating given by the customer (e.g., 1 to 5).',
      },
      {
        name: 'reviewText',
        title: 'Review Text',
        type: 'text',
        description: 'The detailed review provided by the customer.',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        description: 'The date when the review was submitted.',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15,
        },
      },
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }], // Assuming you have a 'product' schema
        description: 'The product being reviewed.',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Whether the review has been approved for display.',
        initialValue: false,
      },
    ],
    preview: {
      select: {
        title: 'customerName',
        subtitle: 'rating',
        media: 'product.image', // Assuming the product schema has an image field
      },
    
    },
  };
export default reviewSchema


  