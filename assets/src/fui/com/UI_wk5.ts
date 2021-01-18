/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wk5 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GGraph;
	public static URL:string = "ui://cu1uq9uglvaaie";

	public static createInstance():UI_wk5 {
		return <UI_wk5>(fgui.UIPackage.createObject("com", "wk5"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GGraph>(this.getChild("n1"));
	}
}