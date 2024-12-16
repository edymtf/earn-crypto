const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Sprite: 0},
	{Text: 0},
	{Button: 0},
	{Mouse: 0},
	{CountingTokens: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {}
}