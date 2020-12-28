/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ptlqBtn extends fgui.GComponent {

	public m_n10:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh38b";

	public static createInstance():UI_ptlqBtn {
		return <UI_ptlqBtn>(fgui.UIPackage.createObject("com", "ptlqBtn"));
	}

	protected onConstruct():void {
		this.m_n10 = <fgui.GImage>(this.getChild("n10"));
	}
}