/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_txBtn extends fgui.GComponent {

	public m_n15:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x1x";

	public static createInstance():UI_txBtn {
		return <UI_txBtn>(fgui.UIPackage.createObject("com", "txBtn"));
	}

	protected onConstruct():void {
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
	}
}