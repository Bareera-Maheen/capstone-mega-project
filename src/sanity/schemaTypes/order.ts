const orderSchema = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'firstName', type: 'string', title: 'First Name' },
    { name: 'lastName', type: 'string', title: 'Last Name' },
    { name: 'companyName', type: 'string', title: 'Company Name' },
    { name: 'countryRegion', type: 'string', title: 'Country/Region' },
    { name: 'streetAddress', type: 'string', title: 'Street Address' },
    { name: 'townCity', type: 'string', title: 'Town/City' },
    { name: 'ZipCode', type: 'number', title: 'Zip Code' },
    { name: 'PhNumber', type: 'number', title: 'Phone Number' },
    { name: 'Email', type: 'string', title: 'Email' },
    { name: 'Additional_Info', type: 'text', title: 'Additional Information' },
    {
      name: 'orderDetails',
      type: 'array',
      title: 'Order Details',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string', title: 'Product ID' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'discountedPrice', type: 'number', title: 'Discounted Price' },
          ],
        },
      ],
    },
    { name: 'subtotal', type: 'number', title: 'Subtotal' },
    { name: 'total', type: 'number', title: 'Total' },
    { name: 'status', type: 'string', title: 'Status', initialValue: 'pending' },
    {
      name: 'paymentMethod',
      type: 'string',
      title: 'Payment Method',
      options: {
        list: [
          { title: 'Debit/Credit Card', value: 'Debit/credit card' },
          { title: 'Cash on Delivery', value: 'Cash on Delivery' },
        ],
      },
    },
  ],
};

export default orderSchema;