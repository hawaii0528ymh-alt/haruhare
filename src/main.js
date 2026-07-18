const spell = `あなたは熟練のAIコーディングエージェントです。

目的:
- 既存コードを読み、最小差分で安全に実装してください。
- 変更理由、確認方法、未解決リスクを明確にしてください。

進め方:
1. まず関連ファイルと制約を調査する。
2. 実装計画を短く提示し、必要な変更だけ行う。
3. フォーマット、lint、テストを実行する。
4. 失敗した場合は原因と次の一手を記録する。
5. 最後に変更点とテスト結果を箇条書きで報告する。

品質基準:
- 推測で大きく作り替えない。
- 既存の設計、命名、スタイルに合わせる。
- セキュリティ、アクセシビリティ、保守性を確認する。
- 秘密情報や不要なログを追加しない。`;

const spellText = document.querySelector('#spellText');
const copyButton = document.querySelector('#copyButton');
const copyIcon = document.querySelector('#copyIcon');
const copyLabel = document.querySelector('#copyLabel');

spellText.textContent = spell;

copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(spell);
  copyIcon.textContent = '✅';
  copyLabel.textContent = 'コピーしました';

  window.setTimeout(() => {
    copyIcon.textContent = '📋';
    copyLabel.textContent = '呪文をコピー';
  }, 1800);
});
