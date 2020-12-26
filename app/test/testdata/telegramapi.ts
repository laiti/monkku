// Example responses from Telegram Bot API for testing

export const MessageResponse = {
  ok: true,
  result: {
    message_id: 4,
    from: { id: 1337, is_bot: true, first_name: 'Monkku', username: 'MonkkuBot' },
    chat: {
      id: -1337,
      title: 'monkku',
      type: 'group',
      all_members_are_administrators: true,
    },
    date: 1608929895,
    text: 'MONKUTI MONK',
  },
};

export const SingleBotCmdMessage = {
  ok: true,
  result: [
    {
      update_id: 1337,
      message: {
        message_id: 5,
        from: {
          id: 13375,
          is_bot: false,
          first_name: 'User',
          last_name: 'Name',
          username: 'username',
          language_code: 'en',
        },
        chat: {
          id: -13378,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608930502,
        text: '/monkku',
        entities: [{ offset: 0, length: 7, type: 'bot_command' }],
      },
    },
  ],
};
