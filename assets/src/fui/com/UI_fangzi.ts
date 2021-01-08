/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_fangzi extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3fp";

	public static createInstance():UI_fangzi {
		return <UI_fangzi>(fgui.UIPackage.createObject("com", "fangzi"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
	}
}