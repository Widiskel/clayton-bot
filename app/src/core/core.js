const a2_0x73d273=a2_0x51e2;(function(_0x4aa700,_0x3ae2e7){const _0xdb16bb=a2_0x51e2,_0x13ad0f=_0x4aa700();while(!![]){try{const _0xd00cd=parseInt(_0xdb16bb(0x223))/0x1+parseInt(_0xdb16bb(0x225))/0x2+parseInt(_0xdb16bb(0x202))/0x3*(parseInt(_0xdb16bb(0x216))/0x4)+-parseInt(_0xdb16bb(0x201))/0x5*(parseInt(_0xdb16bb(0x21b))/0x6)+-parseInt(_0xdb16bb(0x23f))/0x7*(-parseInt(_0xdb16bb(0x1ff))/0x8)+parseInt(_0xdb16bb(0x237))/0x9+-parseInt(_0xdb16bb(0x1ee))/0xa;if(_0xd00cd===_0x3ae2e7)break;else _0x13ad0f['push'](_0x13ad0f['shift']());}catch(_0x2a174a){_0x13ad0f['push'](_0x13ad0f['shift']());}}}(a2_0x5678,0x2acb7));import{API}from'../api/api.js';function a2_0x5678(){const _0x18b0f4=['message','/api/user/daily-claim','...','/api/stack/end','Successfully\x20Get\x20Daily\x20Task','getDefaultTask','status','account','Farming\x20Started','2476xIePlw','GET','/api/tasks/daily-tasks','playTileGame','Game\x20finished\x20got\x20','24KLBtMR','/api/user/auth','task_id','Starting\x20Task\x20','Successfully\x20Claim\x20Farming\x20Reward','/api/user/start','task','playStackGame','156695GaKbzc','startFarming','65768NUiSOs','includes','/api/tasks/complete','Something\x20wrong\x20with\x20partner\x20tasks,\x20skipping.','Error\x20:\x20Failed\x20to\x20play\x20game,\x20game\x20server\x20problem,\x20Retry\x20Again\x20After\x2010\x20Seconds','filter','score','dailyClaimToday','Something\x20wrong\x20with\x20default\x20tasks,\x20skipping.','Failed\x20:\x20','Stack\x20Game\x20','Claiming\x20Farming\x20Reward...','/api/game/save-tile','https://tonclayton.fun','startTask','hasOwnProperty','/api/tasks/claim','\x20Skipping...','2574495ruyMJO','maxTile','Task\x20','POST','fetch','getUserStats','Farming\x20Already\x20Started','/api/user/claim','7IFrpdY','Error\x20:\x20','/api/user/stats','Delaying\x20for\x2060\x20Second\x20Before\x20game\x20end\x20with\x20max\x20tile\x20score\x20is\x20','Successfully\x20Get\x20Task','login','Successfully\x20Login','claimFarming','3425140maENKv','claimTask','query','push','\x20to\x20','\x20Claimed\x20Got\x20','Getting\x20Task...','/api/tasks/default-tasks','/api/stack/update','xp_earned','Getting\x20Daily\x20Task...','getDailyTask','user','Getting\x20User\x20Stats...','Start\x20Playing\x20Stack\x20Game...','Starting\x20Farming...','Try\x20to\x20Claim\x20Daily\x20Reward...','1752032BNoIll','CLaiming\x20Task\x20','271340qJiqrJ','195HXtWgN','description','\x20CL\x20and\x20','error','reward_tokens','getPartner','/api/game/over','Getting\x20Partner\x20Task...','Stack\x20Game\x20Started\x20','delay','Failed\x20to\x20Claim\x20Task\x20'];a2_0x5678=function(){return _0x18b0f4;};return a2_0x5678();}import{Helper}from'../utils/helper.js';function a2_0x51e2(_0x359017,_0x2a0b79){const _0x567872=a2_0x5678();return a2_0x51e2=function(_0x51e2db,_0x5af436){_0x51e2db=_0x51e2db-0x1e7;let _0x1d7963=_0x567872[_0x51e2db];return _0x1d7963;},a2_0x51e2(_0x359017,_0x2a0b79);}import a2_0x4d92f9 from'../utils/logger.js';export class Core extends API{constructor(_0x16ab4f,_0x2883e6,_0x19b2bb,_0x43ddf6){const _0x41f8fc=a2_0x51e2;super(_0x2883e6,_0x41f8fc(0x232),_0x43ddf6),this[_0x41f8fc(0x214)]=_0x16ab4f,this[_0x41f8fc(0x1f0)]=_0x2883e6,this['queryObj']=_0x19b2bb;}async[a2_0x73d273(0x1eb)](_0x245ec2=![]){const _0x3b22ff=a2_0x73d273;try{if(_0x245ec2)await Helper['delay'](0x1f4,this['account'],'Try\x20to\x20Login...',this);const _0x13ff2e=await this['fetch'](_0x3b22ff(0x21c),_0x3b22ff(0x23a),undefined);if(_0x13ff2e[_0x3b22ff(0x213)]==0xc8){if(_0x245ec2)await Helper[_0x3b22ff(0x20b)](0x1f4,this[_0x3b22ff(0x214)],_0x3b22ff(0x1ec),this);this[_0x3b22ff(0x1fa)]=_0x13ff2e[_0x3b22ff(0x1fa)],this[_0x3b22ff(0x22c)]=_0x13ff2e[_0x3b22ff(0x22c)];}else{if(_0x245ec2)await Helper[_0x3b22ff(0x20b)](0x1f4,this['account'],'Failed\x20To\x20Login',this);}}catch(_0x520d19){throw _0x520d19;}}async['start'](_0x3e5f46=![]){const _0x4e93fa=a2_0x73d273;try{if(_0x3e5f46)await Helper[_0x4e93fa(0x20b)](0x1f4,this[_0x4e93fa(0x214)],_0x4e93fa(0x1fe),this);const _0x5b35e6=await this['fetch'](_0x4e93fa(0x20e),'POST',undefined);if(_0x5b35e6['status']==0xc8){if(_0x3e5f46)await Helper[_0x4e93fa(0x20b)](0x1f4,this['account'],'Successfully\x20Claim\x20Daily',this);}else{if(_0x3e5f46)await Helper[_0x4e93fa(0x20b)](0x1f4,this[_0x4e93fa(0x214)],_0x4e93fa(0x22e)+_0x5b35e6['error'],this);}}catch(_0xd7bd3c){throw _0xd7bd3c;}}async[a2_0x73d273(0x23c)](_0x4e58de=![]){const _0xf3f882=a2_0x73d273;try{if(_0x4e58de)await Helper[_0xf3f882(0x20b)](0x1f4,this[_0xf3f882(0x214)],_0xf3f882(0x1fb),this);const _0x587a7d=await this[_0xf3f882(0x23b)](_0xf3f882(0x1e8),_0xf3f882(0x23a),undefined);if(_0x587a7d['status']==0xc8){if(_0x4e58de)await Helper['delay'](0x1f4,this[_0xf3f882(0x214)],'Successfully\x20Get\x20User\x20Stats',this);this['stats']=_0x587a7d;}else await Helper[_0xf3f882(0x20b)](0x1f4,this[_0xf3f882(0x214)],'Failed\x20to\x20get\x20user\x20stats',this);}catch(_0x173ef2){throw _0x173ef2;}}async[a2_0x73d273(0x212)](_0x50112a=![]){const _0x53dee3=a2_0x73d273;try{if(_0x50112a)await Helper[_0x53dee3(0x20b)](0x1f4,this[_0x53dee3(0x214)],_0x53dee3(0x1f4),this);const _0x3a8af1=await this[_0x53dee3(0x23b)](_0x53dee3(0x1f5),'GET',undefined);if(_0x3a8af1[_0x53dee3(0x213)]==0xc8){const _0x1ab208=_0x3a8af1[_0x53dee3(0x22a)](_0x5cf38d=>_0x5cf38d[_0x53dee3(0x234)]('task_id'));this[_0x53dee3(0x221)][_0x53dee3(0x1f1)](..._0x1ab208);if(_0x50112a)await Helper['delay'](0x1f4,this[_0x53dee3(0x214)],_0x53dee3(0x1ea),this);}}catch(_0x318c1c){await Helper[_0x53dee3(0x20b)](0x3e8,this['account'],_0x53dee3(0x22d),this);}}async[a2_0x73d273(0x1f9)](_0x58cddd=![]){const _0x4d933d=a2_0x73d273;try{if(_0x58cddd)await Helper[_0x4d933d(0x20b)](0x1f4,this[_0x4d933d(0x214)],_0x4d933d(0x1f8),this);const _0x73b789=await this[_0x4d933d(0x23b)](_0x4d933d(0x218),_0x4d933d(0x217),undefined);if(_0x73b789[_0x4d933d(0x213)]==0xc8){const _0x4c953a=_0x73b789[_0x4d933d(0x22a)](_0x485198=>_0x485198['hasOwnProperty'](_0x4d933d(0x21d)));this[_0x4d933d(0x221)][_0x4d933d(0x1f1)](..._0x4c953a);if(_0x58cddd)await Helper['delay'](0x1f4,this[_0x4d933d(0x214)],_0x4d933d(0x211),this);}}catch(_0x4c27e4){await Helper['delay'](0x3e8,this['account'],'Something\x20wrong\x20with\x20daily\x20tasks,\x20skipping.',this);}}async[a2_0x73d273(0x207)](_0x3df9c6=![]){const _0x3ac49f=a2_0x73d273;try{if(_0x3df9c6)await Helper[_0x3ac49f(0x20b)](0x1f4,this[_0x3ac49f(0x214)],_0x3ac49f(0x209),this);const _0x4cb594=await this[_0x3ac49f(0x23b)]('/api/tasks/partner-tasks',_0x3ac49f(0x217),undefined);if(_0x4cb594[_0x3ac49f(0x213)]==0xc8){const _0x3773df=_0x4cb594['filter'](_0x26ed36=>_0x26ed36[_0x3ac49f(0x234)](_0x3ac49f(0x21d)));this[_0x3ac49f(0x221)][_0x3ac49f(0x1f1)](..._0x3773df);if(_0x3df9c6)await Helper[_0x3ac49f(0x20b)](0x1f4,this[_0x3ac49f(0x214)],'Successfully\x20Get\x20Partner\x20Task',this);}}catch(_0x31c346){await Helper[_0x3ac49f(0x20b)](0x3e8,this[_0x3ac49f(0x214)],_0x3ac49f(0x228),this);}}async[a2_0x73d273(0x233)](_0x5324aa){const _0x5333f2=a2_0x73d273;try{await Helper[_0x5333f2(0x20b)](0x1f4,this['account'],_0x5333f2(0x21e)+_0x5324aa[_0x5333f2(0x221)][_0x5333f2(0x203)]+'...',this);const _0xddbe61={'task_id':_0x5324aa[_0x5333f2(0x21d)]},_0xd605ab=await this[_0x5333f2(0x23b)](_0x5333f2(0x227),_0x5333f2(0x23a),undefined,_0xddbe61);_0xd605ab[_0x5333f2(0x213)]==0xc8?(await Helper[_0x5333f2(0x20b)](0x1f4,this['account'],_0x5333f2(0x239)+_0x5324aa[_0x5333f2(0x221)][_0x5333f2(0x203)]+'\x20Started\x20Successfully',this),await this['claimTask'](_0x5324aa)):await Helper[_0x5333f2(0x20b)](0x1f4,this[_0x5333f2(0x214)],_0xd605ab[_0x5333f2(0x205)],this);}catch(_0x32cfa0){throw _0x32cfa0;}}async[a2_0x73d273(0x1ef)](_0x43afbc){const _0x4cdb10=a2_0x73d273;try{await Helper['delay'](0x1f4,this['account'],_0x4cdb10(0x200)+_0x43afbc[_0x4cdb10(0x221)][_0x4cdb10(0x203)]+_0x4cdb10(0x20f),this);const _0x32e61a={'task_id':_0x43afbc[_0x4cdb10(0x21d)]},_0xec45c8=await this[_0x4cdb10(0x23b)](_0x4cdb10(0x235),'POST',undefined,_0x32e61a);_0xec45c8[_0x4cdb10(0x213)]==0xc8?(await this[_0x4cdb10(0x1eb)](),await this[_0x4cdb10(0x23c)](),await Helper['delay'](0x1f4,this[_0x4cdb10(0x214)],'Task\x20'+_0x43afbc['task'][_0x4cdb10(0x203)]+_0x4cdb10(0x1f3)+_0xec45c8[_0x4cdb10(0x206)]+'\x20CL...',this)):await Helper[_0x4cdb10(0x20b)](0x1f4,this[_0x4cdb10(0x214)],_0xec45c8[_0x4cdb10(0x205)],this);}catch(_0x36cf76){await Helper[_0x4cdb10(0x20b)](0x1f4,this[_0x4cdb10(0x214)],_0x4cdb10(0x20c)+_0x43afbc['task']['description']+_0x4cdb10(0x236),this);}}async[a2_0x73d273(0x224)](){const _0x3efd6e=a2_0x73d273;try{await Helper['delay'](0x1f4,this[_0x3efd6e(0x214)],_0x3efd6e(0x1fd),this);const _0x5a373b=await this[_0x3efd6e(0x23b)](_0x3efd6e(0x220),_0x3efd6e(0x23a),undefined);_0x5a373b[_0x3efd6e(0x213)]==0xc8?await Helper[_0x3efd6e(0x20b)](0x1f4,this[_0x3efd6e(0x214)],_0x3efd6e(0x215),this):await Helper['delay'](0x1f4,this[_0x3efd6e(0x214)],_0x3efd6e(0x23d),this);}catch(_0x2942ff){throw _0x2942ff;}}async[a2_0x73d273(0x1ed)](){const _0x4844a9=a2_0x73d273;try{await Helper['delay'](0x1f4,this[_0x4844a9(0x214)],_0x4844a9(0x230),this);const _0x5028b8=await this[_0x4844a9(0x23b)](_0x4844a9(0x23e),'POST',undefined);_0x5028b8[_0x4844a9(0x213)]==0xc8?(await Helper['delay'](0x1f4,this[_0x4844a9(0x214)],_0x4844a9(0x21f),this),await this[_0x4844a9(0x1eb)](),await this['getUserStats']()):await Helper['delay'](0x7d0,this['account'],'Error\x20:\x20'+_0x5028b8[_0x4844a9(0x205)],this);}catch(_0xfc5f6e){throw _0xfc5f6e;}}async[a2_0x73d273(0x219)](){const _0x20219d=a2_0x73d273;try{await Helper['delay'](0x1f4,this[_0x20219d(0x214)],'Start\x20Playing\x20Tile\x20Game...',this);const _0x1c5521=await this['fetch']('/api/game/start',_0x20219d(0x23a),undefined);if(_0x1c5521[_0x20219d(0x213)]==0xc8){await Helper[_0x20219d(0x20b)](0x1f4,this[_0x20219d(0x214)],_0x1c5521['message'],this);const _0x14dc0c={'maxTile':0x400*0x2},_0x20e936=await this[_0x20219d(0x23b)](_0x20219d(0x231),_0x20219d(0x23a),undefined,_0x14dc0c);await Helper[_0x20219d(0x20b)](0x1f4,this[_0x20219d(0x214)],_0x20e936[_0x20219d(0x20d)],this),await Helper[_0x20219d(0x20b)](0xea60,this['account'],_0x20219d(0x1e9)+_0x14dc0c[_0x20219d(0x238)],this);const _0x4d36c8={'multiplier':0x2},_0x12aa80=await this[_0x20219d(0x23b)](_0x20219d(0x208),_0x20219d(0x23a),undefined,_0x4d36c8);await Helper[_0x20219d(0x20b)](0x1388,this[_0x20219d(0x214)],_0x20219d(0x21a)+_0x12aa80['earn']+_0x20219d(0x204)+_0x12aa80[_0x20219d(0x1f7)]+'\x20EXP',this),await this[_0x20219d(0x1eb)](),await this[_0x20219d(0x23c)]();}else await Helper['delay'](0x7d0,this[_0x20219d(0x214)],_0x20219d(0x1e7)+_0x1c5521['error'],this);}catch(_0x30e3e4){if(_0x30e3e4[_0x20219d(0x20d)][_0x20219d(0x226)]('401'))throw _0x30e3e4;await Helper[_0x20219d(0x20b)](0x2710,this[_0x20219d(0x214)],_0x20219d(0x229),this),await this[_0x20219d(0x23c)]();}}async[a2_0x73d273(0x222)](){const _0x5a9ec2=a2_0x73d273;try{await Helper[_0x5a9ec2(0x20b)](0x1f4,this[_0x5a9ec2(0x214)],_0x5a9ec2(0x1fc),this);const _0x489816=await this['fetch']('/api/stack/start','POST',undefined);if(_0x489816[_0x5a9ec2(0x213)]==0xc8){await Helper['delay'](0x1f4,this[_0x5a9ec2(0x214)],_0x5a9ec2(0x20a),this);const _0x4f98e1={'score':0x0};for(const _0x294389 of Array(0xc)){_0x4f98e1['score']+=0xa,await Helper['delay'](0x2328,this[_0x5a9ec2(0x214)],'Updating\x20Stack\x20Game\x20score\x20to\x20'+_0x4f98e1[_0x5a9ec2(0x22b)],this);const _0x3a0647=await this[_0x5a9ec2(0x23b)](_0x5a9ec2(0x1f6),'POST',undefined,_0x4f98e1);await Helper[_0x5a9ec2(0x20b)](0x1f4,this[_0x5a9ec2(0x214)],_0x5a9ec2(0x22f)+_0x3a0647['message']+_0x5a9ec2(0x1f2)+_0x4f98e1['score'],this);}_0x4f98e1['score']+=0x1;const _0x49f4ea=await this['fetch'](_0x5a9ec2(0x210),_0x5a9ec2(0x23a),undefined,_0x4f98e1);await Helper[_0x5a9ec2(0x20b)](0x1388,this[_0x5a9ec2(0x214)],_0x5a9ec2(0x21a)+_0x49f4ea['earn']+_0x5a9ec2(0x204)+_0x49f4ea[_0x5a9ec2(0x1f7)]+'\x20EXP',this),await this[_0x5a9ec2(0x1eb)]();}else await Helper[_0x5a9ec2(0x20b)](0x7d0,this[_0x5a9ec2(0x214)],_0x5a9ec2(0x1e7)+_0x489816[_0x5a9ec2(0x205)],this);}catch(_0x491244){throw _0x491244;}}}