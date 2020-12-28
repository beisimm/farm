/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_hideBtn extends fgui.GComponent {

	public m_n5:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3di";

	public static createInstance():UI_hideBtn {
		return <UI_hideBtn>(fgui.UIPackage.createObject("com", "hideBtn"));
	}

	protected onConstruct():void {
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
	}
}