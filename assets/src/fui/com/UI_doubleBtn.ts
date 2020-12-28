/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_doubleBtn extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh38c";

	public static createInstance():UI_doubleBtn {
		return <UI_doubleBtn>(fgui.UIPackage.createObject("com", "doubleBtn"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
	}
}