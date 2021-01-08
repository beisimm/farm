/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_inviteBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugqgkvgi";

	public static createInstance():UI_inviteBtn {
		return <UI_inviteBtn>(fgui.UIPackage.createObject("com", "inviteBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}