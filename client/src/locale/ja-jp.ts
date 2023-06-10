export const logout = 'ログアウト'
export const unsupported = 'このウェブブラウザはWebRTCをサポートしていません。'
export const admin_loggedin = 'あなたは管理者としてログインしています。'
export const you = 'あなた'
export const somebody = '誰か'
export const send_a_message = 'メッセージを送る'

export const side = {
  chat: 'チャット',
  files: 'ファイル',
  settings: '設定',
}

export const connect = {
  login_title: 'ログインしてください',
  invitation_title: 'このルームに招待されています',
  displayname: 'ユーザー名を入力してください',
  password: 'パスワード',
  connect: '接続',
  error: 'ログインエラー',
  empty_displayname: 'ユーザー名は空にできません。',
}

export const context = {
  ignore: '無視する',
  unignore: '無視を解除する',
  mute: 'ミュート',
  unmute: 'ミュート解除',
  release: '制御を解放',
  take: '制御を強制する',
  give: '制御を譲る',
  kick: 'キックする',
  ban: 'IPをブロック',
  confirm: {
    kick_title: '{name} をキックしますか？',
    kick_text: '{name} をキックしてもよろしいですか？',
    ban_title: '{name} をブロックしますか？',
    ban_text: '{name} をブロックしますか？サーバーを再起動する必要がある場合があります。',
    mute_title: '{name} をミュートしますか？',
    mute_text: '{name} をミュートしてもよろしいですか？',
    unmute_title: '{name} のミュートを解除しますか？',
    unmute_text: '{name} のミュートを解除してもよろしいですか？',
    button_yes: 'はい',
    button_cancel: 'キャンセル',
  },
}

export const controls = {
  release: '制御を解放',
  request: '制御を要求',
  lock: '制御をロック',
  unlock: '制御を解除',
}

export const locks = {
  control: {
    lock: '制御をロック（ユーザー用）',
    unlock: '制御を解除（ユーザー用）',
    locked: '制御がロックされています（ユーザー用）',
    unlocked: '制御が解除されています（ユーザー用）',
    notif_locked: 'ユーザー用制御をロック',
    notif_unlocked: 'ユーザー用制御を解除',
  },
  login: {
    lock: 'ルームをロック（ユーザー用）',
    unlock: 'ルームを解除（ユーザー用）',
    locked: 'ルームがロックされています（ユーザー用）',
    unlocked: 'ルームが解除されています（ユーザー用）',
    notif_locked: 'ルームをロック',
    notif_unlocked: 'ルームを解除',
  },
  file_transfer: {
    lock: 'ファイル転送をロック（ユーザー用）',
    unlock: 'ファイル転送を解除（ユーザー用）',
    locked: 'ファイル転送がロックされています（ユーザー用）',
    unlocked: 'ファイル転送が解除されています（ユーザー用）',
    notif_locked: 'ファイル転送をロック',
    notif_unlocked: 'ファイル転送を解除',
  },
}

export const setting = {
  scroll: 'スクロール感度',
  scroll_invert: 'スクロール方向を反転',
  autoplay: '動画の自動再生',
  ignore_emotes: '絵文字を無視',
  chat_sound: 'チャット音を再生',
  keyboard_layout: 'キーボードレイアウト',
  broadcast_title: 'ライブ放送',
}

export const connection = {
  logged_out: 'ログアウトしました。',
  reconnecting: '再接続中...',
  connected: '接続済み',
  disconnected: '切断されました',
  kicked: 'このルームから退出させられました。',
  button_confirm: 'OK',
}

export const notifications = {
  connected: '{name} が接続しました',
  disconnected: '{name} が切断しました',
  controls_taken: '{name} が制御を取得しました',
  controls_taken_force: '強制的に制御を取得',
  controls_taken_steal: '{name} から制御を取得',
  controls_released: '{name} が制御を解放しました',
  controls_released_force: '強制的に制御を解放',
  controls_released_steal: '{name} から制御を解放',
  controls_given: '制御を {name} に譲りました',
  controls_has: '{name} が制御しています',
  controls_has_alt: 'でも、私はその人にあなたがそれを望んでいることを知らせました',
  controls_requesting: '{name} が制御を要求しています',
  resolution: '解像度が {width}x{height}@{rate} に変更されました',
  banned: '{name} をブロックしました',
  kicked: '{name} をキックしました',
  muted: '{name} をミュートしました',
  unmuted: '{name} のミュートを解除しました',
}

export const files = {
  downloads: 'ダウンロード',
  uploads: 'アップロード',
  upload_here: 'ここにファイルをクリックまたはドラッグしてアップロードしてください',
}
