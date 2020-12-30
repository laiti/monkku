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

export const MultipleBotCmdMessages = {
  ok: true,
  result: [
    {
      update_id: 265294191,
      message: {
        message_id: 5,
        from: {
          id: 41358582,
          is_bot: false,
          first_name: 'User1',
          last_name: 'Name',
          username: 'username1',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608930502,
        text: '/monkku',
        entities: [{ offset: 0, length: 7, type: 'bot_command' }],
      },
    },
    {
      update_id: 265294192,
      message: {
        message_id: 6,
        from: {
          id: 41358000,
          is_bot: false,
          first_name: 'Naser',
          last_name: 'Ume',
          username: 'naser_ume',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608930670,
        left_chat_participant: {
          id: 211246197,
          is_bot: true,
          first_name: 'Telegram Bot',
          username: 'BotsyBot',
        },
        left_chat_member: {
          id: 211246197,
          is_bot: true,
          first_name: 'Telegram Bot',
          username: 'BotsyBot',
        },
      },
    },
    {
      update_id: 265294193,
      message: {
        message_id: 7,
        from: {
          id: 41358444,
          is_bot: false,
          first_name: 'User2',
          last_name: 'Name',
          username: 'nasserume',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608930679,
        text: '/monkku',
        entities: [{ offset: 0, length: 5, type: 'bot_command' }],
      },
    },
    {
      update_id: 265294194,
      message: {
        message_id: 8,
        from: {
          id: 41358511,
          is_bot: false,
          first_name: 'Monni',
          last_name: 'Boi',
          username: 'bonni_moi',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608930680,
        text: '/monk',
        entities: [{ offset: 0, length: 5, type: 'bot_command' }],
      },
    },
    {
      update_id: 265294195,
      message: {
        message_id: 9,
        from: {
          id: 41358566,
          is_bot: false,
          first_name: 'Pikku',
          last_name: 'Kyy',
          username: 'viperface',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608990227,
        text: '/monkku4',
        entities: [{ offset: 0, length: 9, type: 'bot_command' }],
      },
    },
    {
      update_id: 265294196,
      message: {
        message_id: 10,
        from: {
          id: 41358533,
          is_bot: false,
          first_name: 'Duuni',
          last_name: 'Peikko',
          username: 'muumilaakso',
          language_code: 'en',
        },
        chat: {
          id: -434691860,
          title: 'monkku',
          type: 'group',
          all_members_are_administrators: true,
        },
        date: 1608990232,
        text: '/monkku12',
        entities: [{ offset: 0, length: 7, type: 'bot_command' }],
      },
    },
  ],
};
