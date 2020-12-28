/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_showBtn extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3dh";

	public static createInstance():UI_showBtn {
		return <UI_showBtn>(fgui.UIPackage.createObject("com", "showBtn"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}