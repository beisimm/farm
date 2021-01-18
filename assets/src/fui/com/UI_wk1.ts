/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wk1 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GGraph;
	public static URL:string = "ui://cu1uq9ugr5yfi8";

	public static createInstance():UI_wk1 {
		return <UI_wk1>(fgui.UIPackage.createObject("com", "wk1"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GGraph>(this.getChild("n1"));
	}
}