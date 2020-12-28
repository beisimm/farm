/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_farmState extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugroz07j";

	public static createInstance():UI_farmState {
		return <UI_farmState>(fgui.UIPackage.createObject("com", "farmState"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
	}
}