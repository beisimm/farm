/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_handState extends fgui.GComponent {

	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugqgkvgr";

	public static createInstance():UI_handState {
		return <UI_handState>(fgui.UIPackage.createObject("com", "handState"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}