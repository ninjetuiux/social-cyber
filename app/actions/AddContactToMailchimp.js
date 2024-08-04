'use server';
import Mailchimp from '@mailchimp/mailchimp_marketing';

const api = process.env.NEXT_PUBLIC_MAILCHIMP_API;
const prefix = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX;
const listId = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;

Mailchimp.setConfig({
  apiKey: api,
  server: prefix,
});

export async function AddContactToMailchimp(FormData) {
  const data = Object.fromEntries(FormData.entries());
  // console.log('my api route:', api, 'my Prefix:', prefix, 'my listId instance:', listId);
  // console.log('Received form data:', data);

  try {
    const response = await Mailchimp.lists.addListMember(listId, {
      email_address: data.EMAIL,
      status: "subscribed",
      merge_fields: {
        FNAME: data.FNAME,
        LNAME: data.LNAME,
        PHONE: data.PHONE,
        MMERGE6: data.MMERGE6,
        MMERGE7: data.MMERGE7,
      },
    });

    // console.log('Response from Mailchimp:', response);
    return response;
  } catch (error) {
    console.error('Error from Mailchimp:', error.response ? error.response.body : error.message);
    throw new Error('Failed to subscribe to Mailchimp');
  }
}