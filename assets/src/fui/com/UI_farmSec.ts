/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_farmSec extends fgui.GComponent {

	public m_n4:fgui.GGraph;
	public m_list:fgui.GList;
	public m_n6:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x2m";

	public static createInstance():UI_farmSec {
		return <UI_farmSec>(fgui.UIPackage.createObject("com", "farmSec"));
	}

	protected onConstruct():void {
		this.m_n4 = <fgui.GGraph>(this.getChild("n4"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n6 = <fgui.GGroup>(this.getChild("n6"));
	}
}